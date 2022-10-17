# Domains

We are at the stage where it is important to document some features that are implicit in NExp.

## Auth

## File

Node experience supports file versioning when saving and editing. These versions will be saved in the system differently according to the optional parameters in the url:
* `hasOriginalName`: When true, a version will be created with its original name, otherwise, it will be created with the id as name.
* `isPublic` : When its value is true, the file will be saved in the public bucket, otherwise it will be saved in the private one.
* `optimize` : When this parameter exists, its value is true and the file is an image, the optimized image will be saved in `webp` format.

The system allows obtaining the saved image with the option of obtaining the desired version according to a parameter in the url:
* `version` : If it is set to the numeric value of the version, the specific version will be obtained, otherwise the latest version will be obtained.

**Optimization:** The system has the functionality of optimizing the latest version of the file saved if it is an image type. The image will be saved in `webp` format.
