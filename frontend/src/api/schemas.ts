import { gql } from "@apollo/client"

export const DISTRICT_FRAGMENT = gql`
  fragment districtF on District {
    id
    name
  }
`

export const SPD_FRAGMENT = gql`
  fragment spdF on Spd {
    id
    name
  }
`

export const STORE_FRAGMENT = gql`
  fragment storeF on Store {
    id
    name
    hours
    street
    spdId
    districtId
  }
`

export const GET_ALL_STORES = gql`
  query getAllStores{
    getAllStores {
      ...storeF
    }
  }
  ${STORE_FRAGMENT}
`

export const GET_ALL_SPDS = gql`
  query getAllSpds {
    getAllSpds {
      ...spdF
    }
  }
  ${SPD_FRAGMENT}
`

export const GET_ALL_DISTRICTS = gql`
  query getAllDistricts {
    getAllDistricts {
      ...districtF
    }
  }
  ${DISTRICT_FRAGMENT}
`


export const DELETE_STORE = gql`
  mutation deleteStoreById($id: ID!) {
    deleteStore(id: $id)
  }
`

export const DELETE_DISTRICT = gql`
  mutation deleteDistrictById($id: ID!) {
    deleteDistrict(id: $id)
  }
`

export const DELETE_SPD = gql`
  mutation deleteSpdById($id: ID!) {
    deleteSpd(id: $id)
  }
`

export const EDIT_STORE = gql`
  mutation editStore($id: ID!, $input: EditStoreInput!) {
    editStore(id: $id, input: $input) {
      ...storeF
    }
  }
  ${STORE_FRAGMENT}
`

export const EDIT_DISTRICT = gql`
  mutation editDistrict($id: ID!, $name: String!) {
    editStore(id: $id, name: $name) {
      ...districtF
    }
  }
  ${DISTRICT_FRAGMENT}
`

export const EDIT_SPD = gql`
  mutation editSpd($id: ID!, $name: String!) {
    editSpd(id: $id, name: $name) {
      ...spdF
    }
  }
  ${SPD_FRAGMENT}
`
