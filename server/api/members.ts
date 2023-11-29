import YAML from "yaml";
import fs from "fs";

export default defineEventHandler(() => {
    const fileBody = fs.readFileSync("assets/members.yaml", "utf-8");
	return {
		$schema: "https://vpn.virtlive.jp/schema/members-v1.json",
		members: YAML.parse(fileBody)
	};
})
