import {Observable, Subscription} from "rxjs";
import {mergeMap} from "rxjs/operators";

export class ObservablesPreview{
  instructionObservable!:Observable<number | string> | Subscription;
  objectACounter: number = 0;
  objectBCounter: number = 0;
  btnFluxAState: boolean = false;
  btnFluxBState: boolean = false;

  constructor(
    public observableTitle: string,
    public objectAText: string,
    public objectBText: string,
    public btnFluxAText: string,
    public btnFluxBText: string,
    public fluxInstructionType: string,
    public observableType: string
  ){}
}