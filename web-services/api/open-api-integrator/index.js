const fs = require('fs')
const path = require('path')
const yaml = require('js-yaml');
const indentString = require('indent-string');
const convert = require('@openapi-contrib/json-schema-to-openapi-schema');


const version_open_api_specs = process.argv[2];
console.log("Api version selected: " + version_open_api_specs);

const open_api_yaml_file_path = path.join("..", "open-api-specs", version_open_api_specs, "main_api.yml");
console.log("Reading open api yaml file: " + open_api_yaml_file_path);
const main_api_yaml_string = fs.readFileSync(open_api_yaml_file_path).toString();

const open_api_yaml_schemas = path.join("..", "open-api-specs", version_open_api_specs, "schemas");
console.log("Reading open api schemas at: " + open_api_yaml_schemas);
const schema_filenames = fs.readdirSync(open_api_yaml_schemas);

const schema_yaml_promises = schema_filenames.map(
    (schema_filename) => new Promise(
        (resolve, reject) => {
            console.log("Reading schema: " + schema_filename);
            const schema_json_path = path.join("..", "open-api-specs", version_open_api_specs, "schemas", schema_filename);
            const schema_json = JSON.parse(fs.readFileSync(schema_json_path));
            const convertedSchema = convert(schema_json);
            convertedSchema
                .then((data) => {
                    console.log("Converted.");
                    resolve({ filename: schema_filename, yaml: yaml.safeDump(data) })
                })
                .catch((err) => reject(err));    
        }
    )
);
Promise.all(schema_yaml_promises)
    .then(
        (schema_yamls) => {
            let replaced_main_api_yaml_string = main_api_yaml_string;
            for(let i in schema_yamls){
                let schema_yaml = schema_yamls[i];
                replaced_main_api_yaml_string = replaced_main_api_yaml_string.replace(
                    "      $ref: 'schemas/"+schema_yaml.filename+"'", 
                    indentString(schema_yaml.yaml, 8, {indent: ' '})
                );
            }

            const main_api_integrated_path = path.join("..", "open-api-specs", version_open_api_specs,  "main_api_integrated.yml");
            console.log("Writing integrated schema: " + main_api_integrated_path);
            fs.writeFileSync(main_api_integrated_path, replaced_main_api_yaml_string);
        }
    )
    .catch( err => console.log(err) )

