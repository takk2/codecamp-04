import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import MapsLoadPage from "../../../src/componentds/commons/mapsLoad/mapsLoad";
import AddBestdealMapsPage from "../../../src/componentds/commons/mapstest/add/addBestdeal/addBestdealMaps.container";
import KeywordListPage from "../../../src/componentds/commons/mapstest/keywordList/keywordList.container";
import ProductNewPage from "../../../src/componentds/units/market/new/ProductNew.container";

export default function Test() {
  return <KeywordListPage />;
}
