import ejs from "ejs"
import path from "path"
import fs from "fs"
import url from "url"



function capitalizeFirstLetter(inputString) {
    if (inputString.length === 0) {
      return inputString; // Handle empty string case
    }
    
    const firstChar = inputString.charAt(0).toUpperCase();
    const restOfString = inputString.slice(1).toLowerCase();
  
    return firstChar + restOfString;
  }
export default class CrudGenerator {

    templateName = ""
    targetProjectDir = ""
    targetOutDir = ""
    data = {}


    constructor(templateName, targetProjectDir) {
        this.templateName = capitalizeFirstLetter(templateName.toLowerCase());
        this.targetOutDir = templateName.toLowerCase()
          
        this.data = {
            pathname: this.targetOutDir,
            templateName: this.templateName
        }

        if(!targetProjectDir) {
            const currentModuleUrl = import.meta.url;
            const currentModulePath = url.fileURLToPath(currentModuleUrl);

            this.targetProjectDir  = path.resolve(path.dirname(currentModulePath), '../../../');
        }
        
        this.generateCrud()
    }

    generateCrud() {
        this.generateModel();
        this.generateRepository();
        this.generateService();
        this.generateController();
        this.generateInjector();
        this.generateRouter();
    }


    generate(classname, type = "class") {
        let scriptPath = path.dirname(new URL(import.meta.url).pathname);
        scriptPath = scriptPath.startsWith('/') ? scriptPath.slice('1') : scriptPath;
        
        const generateType = type === "class" ? "index" : "interface";

        const templateFilePath = path.join(scriptPath, `../templates/crud/${classname}/${generateType}.ejs`);
        const templateFile = fs.readFileSync(templateFilePath, "utf-8")
        const compiledTemplate = ejs.compile(templateFile)
        const output = compiledTemplate(this.data)

        let outpath = `${scriptPath}/out/${classname}/${this.targetOutDir}`
        if(classname === "injectors") {
            outpath = `${scriptPath}/out/${classname}/crud/${this.targetOutDir}`
        }

        if(!fs.existsSync(outpath)) {
            fs.mkdirSync(outpath, { recursive: true });
        }

        fs.writeFileSync(`${outpath}/${generateType}.ts`, output, "utf-8")
        console.log(`${classname} ${generateType} to ${this.templateName} generated`)
    }

    async generateModel() {
        this.generate("models")
    }

    async generateRepository() {
        this.generate("repositories", "class")
        this.generate("repositories", "interface")
    }
    async generateService() {
        this.generate("services", "class")
        this.generate("services", "interface")
    }

    async generateController() {
        this.generate("controllers", "class")
        this.generate("controllers", "interface")
    }

    async generateInjector() {
        this.generate("injectors", "class")
    }

    async generateRouter() {
        this.generate("routes", "class")
    }

}