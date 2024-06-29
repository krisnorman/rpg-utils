export type TableValidationResult = {
  isValid: boolean;
  missingRollNumbers: number[];
  duplicateRollNumbers: number[];
};
