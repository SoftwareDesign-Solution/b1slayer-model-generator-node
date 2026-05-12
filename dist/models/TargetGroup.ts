import type { TargetGroupTypeEnum } from "./TargetGroupTypeEnum";
import type { TargetGroupsDetail } from "./TargetGroupsDetail";

export type TargetGroup = {
	TargetGroupCode: string;
	TargetGroupName: string | null;
	TargetGroupType: TargetGroupTypeEnum | null;
	TargetGroupsDetails: TargetGroupsDetail[] | null;
}