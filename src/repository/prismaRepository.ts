import { PrismaClient } from "@prisma/client";

export class PrismaRepository<T> {
  private prisma: PrismaClient;
  private modelName: string;

  constructor(prisma: PrismaClient, modelName: string) {
    this.prisma = prisma;
    this.modelName = modelName;
  }

  async findAll(): Promise<T[]> {
    return (this.prisma as any)[this.modelName].findMany();
  }

  async findByField(field: string, value: any): Promise<T[]> {
    return (this.prisma as any)[this.modelName].findMany({
      where: {
        [field]: value,
      },
    });
  }

  async create(data: Partial<T>): Promise<T> {
    return (this.prisma as any)[this.modelName].create({
      data,
    });
  }

  async update(id: string, data: Partial<T>): Promise<T> {
    return (this.prisma as any)[this.modelName].update({
      where: {
        id,
      },
      data,
    });
  }

  async delete(id: string): Promise<T> {
    return (this.prisma as any)[this.modelName].delete({
      where: {
        id,
      },
    });
  }
}
