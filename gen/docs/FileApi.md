# FileApi

All URIs are relative to *http://}*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiFilesBase64FILEIDPut**](FileApi.md#apiFilesBase64FILEIDPut) | **PUT** /api/files/base64/{FILE_ID} | Update file by Base64
[**apiFilesBase64Post**](FileApi.md#apiFilesBase64Post) | **POST** /api/files/base64 | Upload file by Base64
[**apiFilesFILEIDDelete**](FileApi.md#apiFilesFILEIDDelete) | **DELETE** /api/files/{FILE_ID} | Delete File
[**apiFilesFILEIDGet**](FileApi.md#apiFilesFILEIDGet) | **GET** /api/files/{FILE_ID} | Get File
[**apiFilesFILEIDPut**](FileApi.md#apiFilesFILEIDPut) | **PUT** /api/files/{FILE_ID} | Update file by Multipart
[**apiFilesGet**](FileApi.md#apiFilesGet) | **GET** /api/files | Get Files Filter
[**apiFilesMetadataFILEIDGet**](FileApi.md#apiFilesMetadataFILEIDGet) | **GET** /api/files/metadata/{FILE_ID} | Get File Metadata
[**apiFilesObjectsGet**](FileApi.md#apiFilesObjectsGet) | **GET** /api/files/objects | Get S3 Objects
[**apiFilesPost**](FileApi.md#apiFilesPost) | **POST** /api/files | Upload file by Multipart
[**apiFilesPresignedGetObjectPost**](FileApi.md#apiFilesPresignedGetObjectPost) | **POST** /api/files/presigned-get-object | Get Presigned Get Object


<a name="apiFilesBase64FILEIDPut"></a>
# **apiFilesBase64FILEIDPut**
> Object apiFilesBase64FILEIDPut(FILE_ID, contentType, body)

Update file by Base64

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.FileApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://}");

    FileApi apiInstance = new FileApi(defaultClient);
    String FILE_ID = "FILE_ID_example"; // String | 
    String contentType = "application/json"; // String | 
    Object body = null; // Object | 
    try {
      Object result = apiInstance.apiFilesBase64FILEIDPut(FILE_ID, contentType, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling FileApi#apiFilesBase64FILEIDPut");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **FILE_ID** | **String**|  |
 **contentType** | **String**|  | [optional]
 **body** | **Object**|  | [optional]

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**403** | Forbidden |  -  |

<a name="apiFilesBase64Post"></a>
# **apiFilesBase64Post**
> Object apiFilesBase64Post(contentType, hasOriginalName, isPublic, optimize, body)

Upload file by Base64

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.FileApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://}");

    FileApi apiInstance = new FileApi(defaultClient);
    String contentType = "application/json"; // String | 
    Boolean hasOriginalName = false; // Boolean | 
    Boolean isPublic = true; // Boolean | 
    Boolean optimize = false; // Boolean | 
    Object body = null; // Object | 
    try {
      Object result = apiInstance.apiFilesBase64Post(contentType, hasOriginalName, isPublic, optimize, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling FileApi#apiFilesBase64Post");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | **String**|  | [optional]
 **hasOriginalName** | **Boolean**|  | [optional]
 **isPublic** | **Boolean**|  | [optional]
 **optimize** | **Boolean**|  | [optional]
 **body** | **Object**|  | [optional]

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**403** | Forbidden |  -  |
**422** | Unprocessable Entity |  -  |

<a name="apiFilesFILEIDDelete"></a>
# **apiFilesFILEIDDelete**
> Object apiFilesFILEIDDelete(FILE_ID)

Delete File

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.FileApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://}");

    FileApi apiInstance = new FileApi(defaultClient);
    String FILE_ID = "FILE_ID_example"; // String | 
    try {
      Object result = apiInstance.apiFilesFILEIDDelete(FILE_ID);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling FileApi#apiFilesFILEIDDelete");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **FILE_ID** | **String**|  |

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**403** | Forbidden |  -  |

<a name="apiFilesFILEIDGet"></a>
# **apiFilesFILEIDGet**
> Object apiFilesFILEIDGet(FILE_ID)

Get File

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.FileApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://}");

    FileApi apiInstance = new FileApi(defaultClient);
    String FILE_ID = "FILE_ID_example"; // String | 
    try {
      Object result = apiInstance.apiFilesFILEIDGet(FILE_ID);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling FileApi#apiFilesFILEIDGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **FILE_ID** | **String**|  |

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |

<a name="apiFilesFILEIDPut"></a>
# **apiFilesFILEIDPut**
> Object apiFilesFILEIDPut(FILE_ID, contentType, file)

Update file by Multipart

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.FileApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://}");

    FileApi apiInstance = new FileApi(defaultClient);
    String FILE_ID = "FILE_ID_example"; // String | 
    String contentType = "application/json"; // String | 
    File file = new File("/path/to/file"); // File | 
    try {
      Object result = apiInstance.apiFilesFILEIDPut(FILE_ID, contentType, file);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling FileApi#apiFilesFILEIDPut");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **FILE_ID** | **String**|  |
 **contentType** | **String**|  | [optional]
 **file** | **File**|  | [optional]

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**403** | Forbidden |  -  |

<a name="apiFilesGet"></a>
# **apiFilesGet**
> Object apiFilesGet(contentType, paginationLimit, paginationOffset)

Get Files Filter

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.FileApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://}");

    FileApi apiInstance = new FileApi(defaultClient);
    String contentType = "application/json"; // String | 
    Integer paginationLimit = 30; // Integer | 
    Integer paginationOffset = 0; // Integer | 
    try {
      Object result = apiInstance.apiFilesGet(contentType, paginationLimit, paginationOffset);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling FileApi#apiFilesGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | **String**|  | [optional]
 **paginationLimit** | **Integer**|  | [optional]
 **paginationOffset** | **Integer**|  | [optional]

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |
**403** | Forbidden |  -  |

<a name="apiFilesMetadataFILEIDGet"></a>
# **apiFilesMetadataFILEIDGet**
> Object apiFilesMetadataFILEIDGet(FILE_ID)

Get File Metadata

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.FileApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://}");

    FileApi apiInstance = new FileApi(defaultClient);
    String FILE_ID = "FILE_ID_example"; // String | 
    try {
      Object result = apiInstance.apiFilesMetadataFILEIDGet(FILE_ID);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling FileApi#apiFilesMetadataFILEIDGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **FILE_ID** | **String**|  |

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |
**403** | Forbidden |  -  |
**422** | Unprocessable Entity |  -  |

<a name="apiFilesObjectsGet"></a>
# **apiFilesObjectsGet**
> Object apiFilesObjectsGet(contentType)

Get S3 Objects

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.FileApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://}");

    FileApi apiInstance = new FileApi(defaultClient);
    String contentType = "application/json"; // String | 
    try {
      Object result = apiInstance.apiFilesObjectsGet(contentType);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling FileApi#apiFilesObjectsGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | **String**|  | [optional]

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |
**403** | Forbidden |  -  |

<a name="apiFilesPost"></a>
# **apiFilesPost**
> Object apiFilesPost(contentType, hasOriginalName, isPublic, file)

Upload file by Multipart

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.FileApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://}");

    FileApi apiInstance = new FileApi(defaultClient);
    String contentType = "application/json"; // String | 
    Boolean hasOriginalName = true; // Boolean | 
    Boolean isPublic = false; // Boolean | 
    File file = new File("/path/to/file"); // File | 
    try {
      Object result = apiInstance.apiFilesPost(contentType, hasOriginalName, isPublic, file);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling FileApi#apiFilesPost");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | **String**|  | [optional]
 **hasOriginalName** | **Boolean**|  | [optional]
 **isPublic** | **Boolean**|  | [optional]
 **file** | **File**|  | [optional]

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |

<a name="apiFilesPresignedGetObjectPost"></a>
# **apiFilesPresignedGetObjectPost**
> Object apiFilesPresignedGetObjectPost(contentType, isPublic, body)

Get Presigned Get Object

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.FileApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://}");

    FileApi apiInstance = new FileApi(defaultClient);
    String contentType = "application/json"; // String | 
    Boolean isPublic = false; // Boolean | 
    Object body = null; // Object | 
    try {
      Object result = apiInstance.apiFilesPresignedGetObjectPost(contentType, isPublic, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling FileApi#apiFilesPresignedGetObjectPost");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | **String**|  | [optional]
 **isPublic** | **Boolean**|  | [optional]
 **body** | **Object**|  | [optional]

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |

