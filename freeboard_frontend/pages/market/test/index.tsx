import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import MapsLoadPage from "../../../src/componentds/commons/mapsLoad/mapsLoad";
import AddBestdealMapsPage from "../../../src/componentds/commons/mapstest/add/addBestdeal/addBestdealMaps.container";
import Keyword from "../../../src/componentds/commons/mapstest/keyword/keyword.container";
import ProductNewPage from "../../../src/componentds/units/market/new/ProductNew.container";

export default function Test() {
  return <Keyword />;
}
