// import { blafaselState } from "../../model/blafasel.model";
import { blafaselState } from "../../model/blafasel-model";
import { userState } from "src/model/user-model";
import { myFeature, blafaselFeature } from "./reducer";

export type State = {
  [myFeature]: userState,
  [blafaselFeature]: blafaselState,
};
