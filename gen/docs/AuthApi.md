# AuthApi

All URIs are relative to *http://}*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiAuthChangeForgotPasswordPost**](AuthApi.md#apiAuthChangeForgotPasswordPost) | **POST** /api/auth/change-forgot-password | Change Forgot Password
[**apiAuthForgotPasswordPost**](AuthApi.md#apiAuthForgotPasswordPost) | **POST** /api/auth/forgot-password | Forgot Password
[**apiAuthLoginPost**](AuthApi.md#apiAuthLoginPost) | **POST** /api/auth/login | Login User
[**apiAuthLogoutPost**](AuthApi.md#apiAuthLogoutPost) | **POST** /api/auth/logout | Logout
[**apiAuthMeGet**](AuthApi.md#apiAuthMeGet) | **GET** /api/auth/me | Me
[**apiAuthMePut**](AuthApi.md#apiAuthMePut) | **PUT** /api/auth/me | Me
[**apiAuthPermissionsGet**](AuthApi.md#apiAuthPermissionsGet) | **GET** /api/auth/permissions | Get Permissions
[**apiAuthRefreshTokenPost**](AuthApi.md#apiAuthRefreshTokenPost) | **POST** /api/auth/refresh-token | Refresh Token
[**apiAuthSignupPost**](AuthApi.md#apiAuthSignupPost) | **POST** /api/auth/signup | SignUp
[**apiAuthVerifyYourAccountConfirmationTokenPut**](AuthApi.md#apiAuthVerifyYourAccountConfirmationTokenPut) | **PUT** /api/auth/verify-your-account/{confirmationToken} | Verify your account


<a name="apiAuthChangeForgotPasswordPost"></a>
# **apiAuthChangeForgotPasswordPost**
> Object apiAuthChangeForgotPasswordPost(body)

Change Forgot Password

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AuthApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://}");

    AuthApi apiInstance = new AuthApi(defaultClient);
    Object body = null; // Object | 
    try {
      Object result = apiInstance.apiAuthChangeForgotPasswordPost(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AuthApi#apiAuthChangeForgotPasswordPost");
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

<a name="apiAuthForgotPasswordPost"></a>
# **apiAuthForgotPasswordPost**
> Object apiAuthForgotPasswordPost(body)

Forgot Password

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AuthApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://}");

    AuthApi apiInstance = new AuthApi(defaultClient);
    Object body = null; // Object | 
    try {
      Object result = apiInstance.apiAuthForgotPasswordPost(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AuthApi#apiAuthForgotPasswordPost");
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

<a name="apiAuthLoginPost"></a>
# **apiAuthLoginPost**
> Object apiAuthLoginPost(provider, body)

Login User

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AuthApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://}");

    AuthApi apiInstance = new AuthApi(defaultClient);
    String provider = "local"; // String | 
    Object body = null; // Object | 
    try {
      Object result = apiInstance.apiAuthLoginPost(provider, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AuthApi#apiAuthLoginPost");
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
 **provider** | **String**|  | [optional]
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

<a name="apiAuthLogoutPost"></a>
# **apiAuthLogoutPost**
> Object apiAuthLogoutPost(body)

Logout

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AuthApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://}");

    AuthApi apiInstance = new AuthApi(defaultClient);
    Object body = null; // Object | 
    try {
      Object result = apiInstance.apiAuthLogoutPost(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AuthApi#apiAuthLogoutPost");
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
**403** | Forbidden |  -  |

<a name="apiAuthMeGet"></a>
# **apiAuthMeGet**
> Object apiAuthMeGet()

Me

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AuthApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://}");

    AuthApi apiInstance = new AuthApi(defaultClient);
    try {
      Object result = apiInstance.apiAuthMeGet();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AuthApi#apiAuthMeGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

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

<a name="apiAuthMePut"></a>
# **apiAuthMePut**
> Object apiAuthMePut(body)

Me

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AuthApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://}");

    AuthApi apiInstance = new AuthApi(defaultClient);
    Object body = null; // Object | 
    try {
      Object result = apiInstance.apiAuthMePut(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AuthApi#apiAuthMePut");
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

<a name="apiAuthPermissionsGet"></a>
# **apiAuthPermissionsGet**
> Object apiAuthPermissionsGet()

Get Permissions

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AuthApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://}");

    AuthApi apiInstance = new AuthApi(defaultClient);
    try {
      Object result = apiInstance.apiAuthPermissionsGet();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AuthApi#apiAuthPermissionsGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

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

<a name="apiAuthRefreshTokenPost"></a>
# **apiAuthRefreshTokenPost**
> Object apiAuthRefreshTokenPost(body)

Refresh Token

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AuthApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://}");

    AuthApi apiInstance = new AuthApi(defaultClient);
    Object body = null; // Object | 
    try {
      Object result = apiInstance.apiAuthRefreshTokenPost(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AuthApi#apiAuthRefreshTokenPost");
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
**403** | Forbidden |  -  |

<a name="apiAuthSignupPost"></a>
# **apiAuthSignupPost**
> Object apiAuthSignupPost(contentType, body)

SignUp

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AuthApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://}");

    AuthApi apiInstance = new AuthApi(defaultClient);
    String contentType = "application/json"; // String | 
    Object body = null; // Object | 
    try {
      Object result = apiInstance.apiAuthSignupPost(contentType, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AuthApi#apiAuthSignupPost");
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
**422** | Unprocessable Entity |  * Access-Control-Allow-Origin -  <br>  * Access-Control-Allow-Methods -  <br>  * Content-Security-Policy -  <br>  * X-DNS-Prefetch-Control -  <br>  * Expect-CT -  <br>  * X-Frame-Options -  <br>  * Strict-Transport-Security -  <br>  * X-Download-Options -  <br>  * X-Content-Type-Options -  <br>  * X-Permitted-Cross-Domain-Policies -  <br>  * Referrer-Policy -  <br>  * X-XSS-Protection -  <br>  * Content-Type -  <br>  * Content-Length -  <br>  * Date -  <br>  * Connection -  <br>  * Keep-Alive -  <br>  |

<a name="apiAuthVerifyYourAccountConfirmationTokenPut"></a>
# **apiAuthVerifyYourAccountConfirmationTokenPut**
> Object apiAuthVerifyYourAccountConfirmationTokenPut(confirmationToken, contentType, body)

Verify your account

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AuthApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://}");

    AuthApi apiInstance = new AuthApi(defaultClient);
    String confirmationToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJkaWdpY2hhbmdlcyIsImF1ZCI6ImRpZ2ljaGFuZ2VzLmNvbSIsInN1YiI6ImpvaG4tZG9lM0BtYWlsLmNvbSIsImlhdCI6MTY1MTAxMzczMSwiZXhwIjoxNjUxMDEzNzMxLCJlbWFpbCI6ImpvaG4tZG9lM0BtYWlsLmNvbSJ9.Jg8mm7J4KtvPBXnpKoGxslqsJE-6owuVx3ZRrRpmcB61pxPrxuY4JLWEil41hyORD4Vbvd9h-mA-Giy5Sz4QJA"; // String | 
    String contentType = "application/json"; // String | 
    Object body = null; // Object | 
    try {
      Object result = apiInstance.apiAuthVerifyYourAccountConfirmationTokenPut(confirmationToken, contentType, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AuthApi#apiAuthVerifyYourAccountConfirmationTokenPut");
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
 **confirmationToken** | **String**|  |
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

