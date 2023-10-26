import type { LoaderType } from "@components";
import type { ClickableCompType } from "@components/Clickable";
import type { OriginalTextType } from "@components/Text";
import type { ButtonType } from "../components/ButtonItem";
import type { CheckboxType } from "../components/CheckboxItem";
import type { ContextMenuType } from "../components/ContextMenu";
import type { DividerType } from "../components/Divider";
import type { FormItemCompType } from "../components/FormItem";
import type { FormNoticeType } from "../components/FormNotice";
import type { FormTextCompType, FormTextTypeKey } from "../components/FormText";
import type { ModalType } from "../components/Modal";
import type { RadioType } from "../components/RadioItem";
import type { SelectCompType } from "../components/SelectItem";
import type { SliderCompType } from "../components/SliderItem";
import type { SwitchItemType, SwitchType } from "../components/SwitchItem";
import type { TextAreaType } from "../components/TextArea";
import type { TextInputType } from "../components/TextInput";
import type { OriginalTooltipType } from "../components/Tooltip";
import { waitForProps } from "../webpack";

// Expand this as needed
interface DiscordComponents {
  Button: ButtonType;
  Checkbox: CheckboxType;
  Clickable: ClickableCompType;
  FormDivider: DividerType;
  FormItem: FormItemCompType;
  FormNotice: FormNoticeType;
  FormSwitch: SwitchItemType;
  FormText: FormTextCompType;
  FormTextTypes: Record<FormTextTypeKey, string>;
  Menu: ContextMenuType["ContextMenu"];
  MenuCheckboxItem: ContextMenuType["MenuCheckboxItem"];
  MenuControlItem: ContextMenuType["MenuControlItem"];
  MenuGroup: ContextMenuType["MenuGroup"];
  MenuItem: ContextMenuType["MenuItem"];
  MenuRadioItem: ContextMenuType["MenuRadioItem"];
  MenuSeparator: ContextMenuType["MenuSeparator"];
  ModalCloseButton: ModalType["ModalCloseButton"];
  ModalContent: ModalType["ModalContent"];
  ModalFooter: ModalType["ModalFooter"];
  ModalHeader: ModalType["ModalHeader"];
  ModalRoot: ModalType["ModalRoot"];
  RadioGroup: RadioType;
  Select: SelectCompType;
  Slider: SliderCompType;
  Spinner: LoaderType;
  Switch: SwitchType;
  Text: OriginalTextType;
  TextArea: TextAreaType;
  TextInput: TextInputType;
  Tooltip: OriginalTooltipType;
}

export default await waitForProps<DiscordComponents>("FormText", "MenuItem");
