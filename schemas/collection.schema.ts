import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CollectionDocument = HydratedDocument<Collection>;

interface Word {
    native: string
    translation: string
    info: string
    progress: number
    lastControlWork: number
    sortId: number
}

interface Statistic {
    metaValue: string
    type: string
    createdAt: string
}

@Schema()
export class Collection {
    @Prop()
    name: string;

    @Prop()
    nativeLang: string;

    @Prop()
    translationLang: string;

    @Prop()
    words: Word[]
    
    @Prop()
    statistics: Statistic[]
}

export const CollectionSchema = SchemaFactory.createForClass(Collection);