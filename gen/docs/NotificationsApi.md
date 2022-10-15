# NotificationsApi

All URIs are relative to *http://}*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiNotificationsMessagePost**](NotificationsApi.md#apiNotificationsMessagePost) | **POST** /api/notifications/message | Send Push Notification


<a name="apiNotificationsMessagePost"></a>
# **apiNotificationsMessagePost**
> apiNotificationsMessagePost(contentType, body)

Send Push Notification

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.NotificationsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://}");

    NotificationsApi apiInstance = new NotificationsApi(defaultClient);
    String contentType = "application/json"; // String | 
    Object body = null; // Object | 
    try {
      apiInstance.apiNotificationsMessagePost(contentType, body);
    } catch (ApiException e) {
      System.err.println("Exception when calling NotificationsApi#apiNotificationsMessagePost");
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

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

