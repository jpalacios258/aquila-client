import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class ProposalService {
  proposal:any;
  private proposalSource =new Subject<any>();
  private formSource =new Subject<any>();
  
  proposalToForm$ = this.proposalSource.asObservable();
  updatedFormtoProposal$ = this.formSource.asObservable();
  
  constructor() { }
  // proposal
  parentUpdatesProposal(proposal: any) {
    this.proposal=proposal;
  }
  // form
  getIntakeForm(){
    return this.proposal.intakeForm;
  }
  updateIntakeForm(intakeForm){
    this.formSource.next(intakeForm);
  }
}
