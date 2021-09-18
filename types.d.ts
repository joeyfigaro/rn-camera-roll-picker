import { ReactNode, FC } from 'react'
import { StyleProp, TextStyle } from 'react-native'
import { PhotoFile } from 'react-native-vision-camera'

export type AvailableFields =
  | 'filename'
  | 'fileSize'
  | 'location'
  | 'imageSize'
  | 'playableDuration'

export type GroupTypes =
  | 'Album'
  | 'All'
  | 'Event'
  | 'Faces'
  | 'Library'
  | 'PhotoStream'
  | 'SavedPhotos'

export type AssetType = 'Photos' | 'Videos' | 'All'
export interface CameraRollPickerProps {
  callback: (selected: PhotoFile, current: PhotoFile) => void
  initialNumToRender?: number
  groupTypes?: GroupTypes
  assetType?: AssetType
  selected?: any[] // []
  selectSingleItem?: boolean // false
  maximum?: number // 15
  imagesPerRow?: number // 15
  imageMargin?: number // 5
  containerWidth?: number // device width
  selectedMarker?: (e: any) => ReactNode
  backgroundColor?: string // white
  emptyText?: string // No photos
  emptyTextStyle?: StyleProp<TextStyle>
  loader?: (e: any) => ReactNode
  groupName?: string // undefined
  videoMarker?: (e: any) => ReactNode
  loaderColor?: string // white
  loaderSize?: number // 25
  checkPermissions?: (e: any) => void // function to check READ_EXTERNAL_STORAGE
  include?: AvailableFields[]
}

const CameraRollPicker: FC<CameraRollPickerProps>

export default CameraRollPicker
