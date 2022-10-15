# ItemApi

All URIs are relative to *http://}*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiItemsGet**](ItemApi.md#apiItemsGet) | **GET** /api/items | Get Filter Item
[**apiItemsITEMIDDelete**](ItemApi.md#apiItemsITEMIDDelete) | **DELETE** /api/items/{ITEM_ID} | Delete Item
[**apiItemsITEMIDGet**](ItemApi.md#apiItemsITEMIDGet) | **GET** /api/items/{ITEM_ID} | Get One Item
[**apiItemsITEMIDPut**](ItemApi.md#apiItemsITEMIDPut) | **PUT** /api/items/{ITEM_ID} | Update Item
[**apiItemsPost**](ItemApi.md#apiItemsPost) | **POST** /api/items | Add Item


<a name="apiItemsGet"></a>
# **apiItemsGet**
> Object apiItemsGet(contentType, paginationLimit, paginationOffset, filterType)

Get Filter Item

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ItemApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://}");

    ItemApi apiInstance = new ItemApi(defaultClient);
    String contentType = "application/json"; // String | 
    Integer paginationLimit = 2; // Integer | 
    Integer paginationOffset = 0; // Integer | 
    Integer filterType = 11; // Integer | 
    try {
      Object result = apiInstance.apiItemsGet(contentType, paginationLimit, paginationOffset, filterType);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ItemApi#apiItemsGet");
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
 **filterType** | **Integer**|  | [optional]

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

<a name="apiItemsITEMIDDelete"></a>
# **apiItemsITEMIDDelete**
> Object apiItemsITEMIDDelete(ITEM_ID, contentType)

Delete Item

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ItemApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://}");

    ItemApi apiInstance = new ItemApi(defaultClient);
    String ITEM_ID = "ITEM_ID_example"; // String | 
    String contentType = "application/json"; // String | 
    try {
      Object result = apiInstance.apiItemsITEMIDDelete(ITEM_ID, contentType);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ItemApi#apiItemsITEMIDDelete");
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
 **ITEM_ID** | **String**|  |
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

<a name="apiItemsITEMIDGet"></a>
# **apiItemsITEMIDGet**
> Object apiItemsITEMIDGet(ITEM_ID, contentType)

Get One Item

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ItemApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://}");

    ItemApi apiInstance = new ItemApi(defaultClient);
    String ITEM_ID = "ITEM_ID_example"; // String | 
    String contentType = "application/json"; // String | 
    try {
      Object result = apiInstance.apiItemsITEMIDGet(ITEM_ID, contentType);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ItemApi#apiItemsITEMIDGet");
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
 **ITEM_ID** | **String**|  |
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

<a name="apiItemsITEMIDPut"></a>
# **apiItemsITEMIDPut**
> Object apiItemsITEMIDPut(ITEM_ID, contentType, body)

Update Item

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ItemApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://}");

    ItemApi apiInstance = new ItemApi(defaultClient);
    String ITEM_ID = "ITEM_ID_example"; // String | 
    String contentType = "application/json"; // String | 
    Object body = null; // Object | 
    try {
      Object result = apiInstance.apiItemsITEMIDPut(ITEM_ID, contentType, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ItemApi#apiItemsITEMIDPut");
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
 **ITEM_ID** | **String**|  |
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

<a name="apiItemsPost"></a>
# **apiItemsPost**
> Object apiItemsPost(contentType, body)

Add Item

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ItemApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://}");

    ItemApi apiInstance = new ItemApi(defaultClient);
    String contentType = "application/json"; // String | 
    Object body = null; // Object | 
    try {
      Object result = apiInstance.apiItemsPost(contentType, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ItemApi#apiItemsPost");
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

