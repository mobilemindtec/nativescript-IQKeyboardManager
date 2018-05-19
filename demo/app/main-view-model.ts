import { Observable } from "data/observable";

export class HelloWorldModel extends Observable {

  private iqKeyboard: IQKeyboardManager;

  public iqKeyboardEnabled: boolean = true;
  public iqKeyboardToolbarEnabled: boolean = true;
  public keepKeyboardOpenOnTouchOutside: boolean = true;
  public showHintInToolbar: boolean = true;
  public keyboardAppearanceDark: boolean = false;
  public toggleDoneButtonTextChanged: boolean = false;
  public increaseKeyboardDistanceFromTextField: boolean = false;

  constructor() {
    super();
    this.iqKeyboard = IQKeyboardManager.sharedManager();
  }

  toggleIQKeyboard(): void {
    this.iqKeyboard.enable = !this.iqKeyboard.enable;
  }

  toggleIQKeyboardToolbar(): void {
    this.iqKeyboard.enableAutoToolbar = !this.iqKeyboard.enableAutoToolbar;
  }

  toggleKeepKeyboardOpen(): void {
    this.iqKeyboard.shouldResignOnTouchOutside = !this.iqKeyboard.shouldResignOnTouchOutside;
  }

  toggleShowHintInToolbar(): void {
    this.iqKeyboard.shouldShowTextFieldPlaceholder = !this.iqKeyboard.shouldShowTextFieldPlaceholder;
  }

  toggleKeyboardAppearance(): void {
    this.iqKeyboard.overrideKeyboardAppearance = true;
    this.iqKeyboard.keyboardAppearance =
        this.iqKeyboard.keyboardAppearance === UIKeyboardAppearance.Default ? UIKeyboardAppearance.Dark : UIKeyboardAppearance.Default;
  }

  toggleDoneButtonText(): void {
    this.iqKeyboard.toolbarDoneBarButtonItemText = this.toggleDoneButtonTextChanged ? "Ready" : "Done";
  }

  toggleIncreaseKeyboardDistanceFromTextField(): void {
    this.iqKeyboard.keyboardDistanceFromTextField = this.iqKeyboard.keyboardDistanceFromTextField === 10 ? 30 : 10;
  }
}