// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { Tag } from "./Tag";

/**
 * we wrap this in a struct so we can implement FromSqlRow<Json> for it
 */
export type PostTags = { tags: Array<Tag> };