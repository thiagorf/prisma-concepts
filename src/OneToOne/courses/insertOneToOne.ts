import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
	const result = await prisma.courses.create({
		data: {
			name: "Node.js",
			duration: 100,
			description: "É bom",
			teacher: {
				connectOrCreate: {
					where: {
						name: "Thiago"
					},
					create: {
						name: "Thiago"
					}
				}
			}
		}
	})
	console.log(result);
}

main()