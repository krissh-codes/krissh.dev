import * as fs from "fs";

export interface RedirectEntry {
    aliases?: string[];
    url: string;
}

export type Redirects = Record<string, RedirectEntry>;

export function generateRedirects(jsonPath: fs.PathOrFileDescriptor, outputPath: fs.PathOrFileDescriptor) {
    const data: Redirects = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));

    let redirects = '';
    Object.keys(data).forEach(key => {
        const { aliases = [], url } = data[key];
        [key, ...aliases].forEach(alias => {
            redirects += `/${alias}\t\t${url}\t\t301\n`
        });
    });

    fs.writeFileSync(outputPath, redirects.trim() + '\n');
    console.info(`[redirects] ✅  ${Object.entries(data).length} redirects generated.`);
}
