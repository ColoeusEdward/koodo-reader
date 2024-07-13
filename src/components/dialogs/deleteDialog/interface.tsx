import BookModel from "../../../model/Book";
import NoteModel from "../../../model/Note";
import BookmarkModel from "../../../model/Bookmark";
import { RouteComponentProps } from "react-router-dom";

export interface DeleteDialogProps extends RouteComponentProps<any> {
  books: BookModel[];
  isOpenDeleteDialog: boolean;
  currentBook: BookModel;
  bookmarks: BookmarkModel[];
  notes: NoteModel[];
  digests: NoteModel[];
  mode: string;
  shelfIndex: number;
  selectedBooks: string[];
  isSelectBook: boolean;
  handleFetchBooks: () => void;
  handleSelectBook: (isSelectBook: boolean) => void;
  handleDeleteDialog: (isShow: boolean) => void;
  handleActionDialog: (isShow: boolean) => void;
  handleFetchBookmarks: () => void;
  handleSelectedBooks: (selectedBooks: string[]) => void;
  handleFetchNotes: () => void;
  t: (title: string) => string;
}
export interface DeleteDialogState {
  isDeleteShelfBook: boolean;
  isDisableTrashBin: boolean;
}
