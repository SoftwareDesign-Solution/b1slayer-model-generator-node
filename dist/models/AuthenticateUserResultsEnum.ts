export enum AuthenticateUserResultsEnum {
	aturNoUserConnectedToCompany = 0,
	aturUsernamePasswordMatched = 1,
	aturLogOnUserNotAdmin = 2,
	aturBadUserOrPassword = 3,
	aturUserHasBeenLocked = 4,
	aturPasswordExpired = 5,
	aturDBErrors = 6,
	aturWrongDomainName = 7,
}