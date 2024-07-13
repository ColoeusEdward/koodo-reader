import { RouteComponentProps } from "react-router-dom";
export interface PDFWidgetProps extends RouteComponentProps<any> {
  handleReadingState: (readingState: boolean) => void;
}
export interface PDFWidgetState {
  isHover: boolean;
}
