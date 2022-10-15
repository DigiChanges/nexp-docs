# UserApi

All URIs are relative to *http://}*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiUsersAssignRoleUSERIDPut**](UserApi.md#apiUsersAssignRoleUSERIDPut) | **PUT** /api/users/assign-role/{USER_ID} | Assign Roles To User
[**apiUsersChangeMyPasswordPost**](UserApi.md#apiUsersChangeMyPasswordPost) | **POST** /api/users/change-my-password | Change My Password
[**apiUsersChangeUserPasswordUSERIDPut**](UserApi.md#apiUsersChangeUserPasswordUSERIDPut) | **PUT** /api/users/change-user-password/{USER_ID} | Change User Password
[**apiUsersGet**](UserApi.md#apiUsersGet) | **GET** /api/users | Get Users Filter
[**apiUsersPost**](UserApi.md#apiUsersPost) | **POST** /api/users | Add One User
[**apiUsersUSERIDDelete**](UserApi.md#apiUsersUSERIDDelete) | **DELETE** /api/users/{USER_ID} | Delete User
[**apiUsersUSERIDGet**](UserApi.md#apiUsersUSERIDGet) | **GET** /api/users/{USER_ID} | Get One User
[**apiUsersUSERIDPut**](UserApi.md#apiUsersUSERIDPut) | **PUT** /api/users/{USER_ID} | Update User


<a name="apiUsersAssignRoleUSERIDPut"></a>
# **apiUsersAssignRoleUSERIDPut**
> Object apiUsersAssignRoleUSERIDPut(USER_ID, contentType, body)

Assign Roles To User

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.UserApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://}");

    UserApi apiInstance = new UserApi(defaultClient);
    String USER_ID = "USER_ID_example"; // String | 
    String contentType = "application/json"; // String | 
    Object body = null; // Object | 
    try {
      Object result = apiInstance.apiUsersAssignRoleUSERIDPut(USER_ID, contentType, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling UserApi#apiUsersAssignRoleUSERIDPut");
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
 **USER_ID** | **String**|  |
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

<a name="apiUsersChangeMyPasswordPost"></a>
# **apiUsersChangeMyPasswordPost**
> Object apiUsersChangeMyPasswordPost(contentType, body)

Change My Password

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.UserApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://}");

    UserApi apiInstance = new UserApi(defaultClient);
    String contentType = "application/json"; // String | 
    Object body = null; // Object | 
    try {
      Object result = apiInstance.apiUsersChangeMyPasswordPost(contentType, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling UserApi#apiUsersChangeMyPasswordPost");
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

<a name="apiUsersChangeUserPasswordUSERIDPut"></a>
# **apiUsersChangeUserPasswordUSERIDPut**
> apiUsersChangeUserPasswordUSERIDPut(USER_ID, contentType, body)

Change User Password

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.UserApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://}");

    UserApi apiInstance = new UserApi(defaultClient);
    String USER_ID = "USER_ID_example"; // String | 
    String contentType = "application/json"; // String | 
    Object body = null; // Object | 
    try {
      apiInstance.apiUsersChangeUserPasswordUSERIDPut(USER_ID, contentType, body);
    } catch (ApiException e) {
      System.err.println("Exception when calling UserApi#apiUsersChangeUserPasswordUSERIDPut");
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
 **USER_ID** | **String**|  |
 **contentType** | **String**|  | [optional]
 **body** | **Object**|  | [optional]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**403** | Forbidden |  -  |

<a name="apiUsersGet"></a>
# **apiUsersGet**
> Object apiUsersGet(contentType, paginationLimit, paginationOffset, filterEnable, filterEmail)

Get Users Filter

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.UserApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://}");

    UserApi apiInstance = new UserApi(defaultClient);
    String contentType = "application/json"; // String | 
    Integer paginationLimit = 4; // Integer | 
    Integer paginationOffset = 0; // Integer | 
    Boolean filterEnable = true; // Boolean | 
    String filterEmail = "user"; // String | 
    try {
      Object result = apiInstance.apiUsersGet(contentType, paginationLimit, paginationOffset, filterEnable, filterEmail);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling UserApi#apiUsersGet");
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
 **filterEnable** | **Boolean**|  | [optional]
 **filterEmail** | **String**|  | [optional]

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

<a name="apiUsersPost"></a>
# **apiUsersPost**
> Object apiUsersPost(contentType, body)

Add One User

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.UserApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://}");

    UserApi apiInstance = new UserApi(defaultClient);
    String contentType = "application/json"; // String | 
    Object body = null; // Object | 
    try {
      Object result = apiInstance.apiUsersPost(contentType, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling UserApi#apiUsersPost");
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
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |

<a name="apiUsersUSERIDDelete"></a>
# **apiUsersUSERIDDelete**
> Object apiUsersUSERIDDelete(USER_ID, contentType)

Delete User

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.UserApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://}");

    UserApi apiInstance = new UserApi(defaultClient);
    String USER_ID = "USER_ID_example"; // String | 
    String contentType = "application/json"; // String | 
    try {
      Object result = apiInstance.apiUsersUSERIDDelete(USER_ID, contentType);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling UserApi#apiUsersUSERIDDelete");
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
 **USER_ID** | **String**|  |
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

<a name="apiUsersUSERIDGet"></a>
# **apiUsersUSERIDGet**
> Object apiUsersUSERIDGet(USER_ID, contentType)

Get One User

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.UserApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://}");

    UserApi apiInstance = new UserApi(defaultClient);
    String USER_ID = "USER_ID_example"; // String | 
    String contentType = "application/json"; // String | 
    try {
      Object result = apiInstance.apiUsersUSERIDGet(USER_ID, contentType);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling UserApi#apiUsersUSERIDGet");
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
 **USER_ID** | **String**|  |
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
**422** | Unprocessable Entity |  -  |

<a name="apiUsersUSERIDPut"></a>
# **apiUsersUSERIDPut**
> Object apiUsersUSERIDPut(USER_ID, contentType, body)

Update User

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.UserApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://}");

    UserApi apiInstance = new UserApi(defaultClient);
    String USER_ID = "USER_ID_example"; // String | 
    String contentType = "application/json"; // String | 
    Object body = null; // Object | 
    try {
      Object result = apiInstance.apiUsersUSERIDPut(USER_ID, contentType, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling UserApi#apiUsersUSERIDPut");
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
 **USER_ID** | **String**|  |
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
**422** | Unprocessable Entity |  -  |

