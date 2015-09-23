# meteor-cloudinary
Cloudinary NPM, jQuery package for meteor

Current version:

Cloudinary NPM `1.2.4`
https://github.com/cloudinary/cloudinary_npm

Cloudinary jQuery plugin `1.0.25`
https://github.com/cloudinary/cloudinary_js

## Examples

### Server-side:

- initialization
```
cloudinary.config({
    cloud_name: 'your cloud name',
    api_key: 'your api key',
    api_secret: 'your api secret'
});
```

- to get a signature for client-side direct upload
```
var signature = cloudinary.utils.api_sign_request(params, api_secret);
```

- or use this method to get 'form-data' and form attributes to be used by the Cloudinary uploader input
```
var signedData = cloudinary.uploader.direct_upload(callback_url, params);
```

### Client-side:

- insert an input tag
```
<input type="file" id="uploader" class="cloudinary-fileupload" data-cloudinary-field="image_id">
```

- set the upload parameters and signature fetched from the server
```
$('#uploader').attr('data-form-data', form_data);
$('#uploader').attr('data-form-url', upload_url);
```


- configurate the input
```
$('#uploader').cloudinary_fileupload({
        disableImageResize: false,
        imageMaxWidth: 1000,
        imageMaxHeight: 1000,
        acceptFileTypes: /(\.|\/)(gif|jpe?g|png|bmp|ico)$/i,
        maxFileSize: 3000000,
        // ...
});
```

See http://cloudinary.com/documentation/jquery_integration#upload_images for more details
