import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Stack from '@mui/material/Stack'

import FileUpload from '../components/FileUpload'

export default {
  title: 'Example/FileUpload',
  component: FileUpload,
} as ComponentMeta<typeof FileUpload>

const Template: ComponentStory<typeof FileUpload> = (args) => <FileUpload {...args} />

export const Playground = Template.bind({})

export const Variants: ComponentStory<typeof FileUpload> = () => {
  const handleFileUploadError = () => {
    console.log(123)

    // Do something...
  }

  const handleFilesChange = () => {
    console.log(123)
    // Do something...
  }

  return (
    <Stack spacing={2} maxWidth={300}>
      <FileUpload
        getBase64={false}
        multiFile={true}
        disabled={false}
        title="My awesome file uploader"
        header="[Drag to drop]"
        leftLabel="or"
        rightLabel="to select files"
        buttonLabel="click here"
        buttonRemoveLabel="Remove all"
        maxFileSize={10}
        maxUploadFiles={0}
        maxFilesContainerHeight={357}
        acceptedType={'image/*'}
        errorSizeMessage={'fill it or remove it to use the default error message'}
        allowedExtensions={['jpg', 'jpeg']}
        onFilesChange={handleFilesChange}
        onError={handleFileUploadError}
        imageSrc={'path/to/custom/image'}
        BannerProps={{ elevation: 0, variant: 'outlined' }}
        showPlaceholderImage={true}
        PlaceholderGridProps={{ md: 4 }}
        LabelsGridProps={{ md: 8 }}
        onContextReady={(context) => {
          // access to component context here
        }}
        ContainerProps={{
          elevation: 0,
          variant: 'outlined',
          sx: { p: 1 },
        }}
        PlaceholderImageDimension={{
          xs: { width: 128, height: 128 },
          sm: { width: 128, height: 128 },
          md: { width: 164, height: 164 },
          lg: { width: 256, height: 256 },
        }}
      />
    </Stack>
  )
}
