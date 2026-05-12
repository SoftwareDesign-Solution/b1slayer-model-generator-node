import type { BlobTableKeySegment } from "./BlobTableKeySegment";

export type BlobParams = {
	Table: string | null;
	Field: string | null;
	FileName: string | null;
	BlobTableKeySegments: BlobTableKeySegment[] | null;
}