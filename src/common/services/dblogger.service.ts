import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class DBLoggerService {
  constructor(
    @InjectModel('dblogs') private readonly logModel: Model<void>,
    // @InjectModel('programs') private readonly programModel: Model<any>,
  ) {}

  async saveLoges(
    collectionName: string,
    methodName: string,
    query: string,
    doc: string,
    raw: string,
  ): Promise<any> {
    // const all_program = await this.programModel.find({});
    // console.log(all_program);

    console.log(collectionName, methodName, query, doc, raw);
    return;
  }

  private isInternalLog(collectionName: string, methodName: string): boolean {
    const allowed_collections = ['todos'];
    const allowed_methods = ['insertOne', 'updateOne'];
    return (
      allowed_collections.includes(collectionName) &&
      allowed_methods.includes(methodName)
    );
  }
}

import { Schema } from 'mongoose';
export const LoggerSchema = new Schema({
  collectionName: String,
  methodName: String,
  query: Schema.Types.Mixed,
  doc: Schema.Types.Mixed,
  raw: String,
  timestamp: { type: Date, default: Date.now },
});
