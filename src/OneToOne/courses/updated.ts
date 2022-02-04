import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
	const result = await prisma.courses.update({
		where: {
			id: "a0789122-d9b1-4dfb-996a-f98f16b74102"
		},
		data: {
			description: "Curso Hard"
		}
	})

	console.log(result)
}

main()