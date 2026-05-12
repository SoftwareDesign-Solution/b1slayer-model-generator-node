import type { BoYesNoEnum } from "./BoYesNoEnum";
import type { TrackingNoteItem } from "./TrackingNoteItem";
import type { TrackingNoteBroker } from "./TrackingNoteBroker";

export type TrackingNote = {
	TrackingNoteNumber: number;
	CCDNumber: string | null;
	Date: Date | null;
	CustomsTerminal: string | null;
	CountryOfOrigin: string | null;
	IsDirectImport: BoYesNoEnum | null;
	TrackingNoteItemCollection: TrackingNoteItem[] | null;
	TrackingNoteBrokerCollection: TrackingNoteBroker[] | null;
}