import YAML from "yaml";
import fs from "fs";

export default defineEventHandler(() => {
    const fileBody = fs.readFileSync("assets/members.yaml", "utf-8");
    const members = {
		$schema: "https://vpn.virtlive.jp/schema/typed-members-v1.json",
		members: YAML.parse(fileBody)
	};
	for (const membersKey in members.members) {
		members.members[membersKey].type = Object.keys(members.members[membersKey]);
	}
	return members;
})
