# RoleApi

All URIs are relative to *http://}*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiAuthSyncRolesPermissionsPost**](RoleApi.md#apiAuthSyncRolesPermissionsPost) | **POST** /api/auth/sync-roles-permissions | Sync Permissions By Role
[**apiRolesGet**](RoleApi.md#apiRolesGet) | **GET** /api/roles | Get Sort Role
[**apiRolesPost**](RoleApi.md#apiRolesPost) | **POST** /api/roles | Add Roles with Permissions
[**apiRolesROLEIDDelete**](RoleApi.md#apiRolesROLEIDDelete) | **DELETE** /api/roles/{ROLE_ID} | Delete Role
[**apiRolesROLEIDGet**](RoleApi.md#apiRolesROLEIDGet) | **GET** /api/roles/{ROLE_ID} | Get One Role
[**apiRolesROLEIDPut**](RoleApi.md#apiRolesROLEIDPut) | **PUT** /api/roles/{ROLE_ID} | Update Role


<a name="apiAuthSyncRolesPermissionsPost"></a>
# **apiAuthSyncRolesPermissionsPost**
> Object apiAuthSyncRolesPermissionsPost(contentType)

Sync Permissions By Role

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.RoleApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://}");

    RoleApi apiInstance = new RoleApi(defaultClient);
    String contentType = "application/json"; // String | 
    try {
      Object result = apiInstance.apiAuthSyncRolesPermissionsPost(contentType);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling RoleApi#apiAuthSyncRolesPermissionsPost");
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
**201** | Created |  -  |
**403** | Forbidden |  -  |

<a name="apiRolesGet"></a>
# **apiRolesGet**
> Object apiRolesGet(contentType, paginationLimit, paginationOffset, sortSlug)

Get Sort Role

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.RoleApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://}");

    RoleApi apiInstance = new RoleApi(defaultClient);
    String contentType = "application/json"; // String | 
    Integer paginationLimit = 2; // Integer | 
    Integer paginationOffset = 0; // Integer | 
    String sortSlug = "desc"; // String | 
    try {
      Object result = apiInstance.apiRolesGet(contentType, paginationLimit, paginationOffset, sortSlug);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling RoleApi#apiRolesGet");
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
 **sortSlug** | **String**|  | [optional]

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

<a name="apiRolesPost"></a>
# **apiRolesPost**
> Object apiRolesPost(contentType, body)

Add Roles with Permissions

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.RoleApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://}");

    RoleApi apiInstance = new RoleApi(defaultClient);
    String contentType = "application/json"; // String | 
    Object body = null; // Object | 
    try {
      Object result = apiInstance.apiRolesPost(contentType, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling RoleApi#apiRolesPost");
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

<a name="apiRolesROLEIDDelete"></a>
# **apiRolesROLEIDDelete**
> Object apiRolesROLEIDDelete(ROLE_ID, contentType)

Delete Role

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.RoleApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://}");

    RoleApi apiInstance = new RoleApi(defaultClient);
    String ROLE_ID = "ROLE_ID_example"; // String | 
    String contentType = "application/json"; // String | 
    try {
      Object result = apiInstance.apiRolesROLEIDDelete(ROLE_ID, contentType);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling RoleApi#apiRolesROLEIDDelete");
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
 **ROLE_ID** | **String**|  |
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
**201** | Created |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |

<a name="apiRolesROLEIDGet"></a>
# **apiRolesROLEIDGet**
> Object apiRolesROLEIDGet(ROLE_ID, contentType)

Get One Role

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.RoleApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://}");

    RoleApi apiInstance = new RoleApi(defaultClient);
    String ROLE_ID = "ROLE_ID_example"; // String | 
    String contentType = "application/json"; // String | 
    try {
      Object result = apiInstance.apiRolesROLEIDGet(ROLE_ID, contentType);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling RoleApi#apiRolesROLEIDGet");
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
 **ROLE_ID** | **String**|  |
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
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |

<a name="apiRolesROLEIDPut"></a>
# **apiRolesROLEIDPut**
> Object apiRolesROLEIDPut(ROLE_ID, contentType, body)

Update Role

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.RoleApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://}");

    RoleApi apiInstance = new RoleApi(defaultClient);
    String ROLE_ID = "ROLE_ID_example"; // String | 
    String contentType = "application/json"; // String | 
    Object body = null; // Object | 
    try {
      Object result = apiInstance.apiRolesROLEIDPut(ROLE_ID, contentType, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling RoleApi#apiRolesROLEIDPut");
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
 **ROLE_ID** | **String**|  |
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
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |

