import { IntakeForm } from './IntakeForm';
export class Proposal{

    private _intakeForm:IntakeForm;
// budget,equipment,timeline....coi forms
	constructor(intakeForm?:IntakeForm) {
        this._intakeForm=intakeForm;
    }

	public get intakeForm(): IntakeForm {
		return this._intakeForm;
	}

	public set intakeForm(value: IntakeForm) {
		this._intakeForm = value;
	}
}