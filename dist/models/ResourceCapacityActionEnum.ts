export enum ResourceCapacityActionEnum {
	rcaUnknown = 0,
	rcaProductionOrderCreate = 1,
	rcaProductionOrderClose = 2,
	rcaProductionOrderReschedule = 3,
	rcaProductionOrderAddLine = 4,
	rcaProductionOrderDeleteLine = 5,
	rcaProductionOrderUpdateLine = 6,
	rcaIssueForProductionCreate = 7,
	rcaReceiptFromProductionCreate = 8,
}