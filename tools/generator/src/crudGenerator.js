import ejs from "ejs"
import path from "path"
import fs from "fs"
import url from "url"

export default class CrudGenerator {

    templateName = ""
    targetProjectDir = ""
    data = {}
    constructor(templateName, targetProjectDir) {
        this.templateName = templateName;
        this.data = {
            templateName: this.templateName
        }

        if(!targetProjectDir) {
            const currentModuleUrl = import.meta.url;
            const currentModulePath = url.fileURLToPath(currentModuleUrl);

            this.targetProjectDir  = path.resolve(path.dirname(currentModulePath), '../../../');
        }
        this.generateModel()
    }


    generate(type) {
        let scriptPath = path.dirname(new URL(import.meta.url).pathname);
        scriptPath = scriptPath.startsWith('/') ? scriptPath.slice('1') : scriptPath;
        
        const templateFilePath = path.join(scriptPath, `../templates/crud/${type}/index.ejs`);
        const templateFile = fs.readFileSync(templateFilePath, "utf-8")
        const compiledTemplate = ejs.compile(templateFile)
        const output = compiledTemplate(this.data)

        fs.writeFileSync(`${scriptPath}/out/${this.templateName}.ts`, output, "utf-8")
        console.log(`${type} to ${this.templateName} generated`)
    }

    async generateModel() {
        this.generate("model")
    }

    async generateRepository() {
        this.generate("repositories")
    }

}