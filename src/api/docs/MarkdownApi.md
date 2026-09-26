# MarkdownApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**apiMarkdownAllFilesGet**](MarkdownApi.md#apimarkdownallfilesget) | **GET** /api/Markdown/allFiles |  |
| [**apiMarkdownBeautifyPost**](MarkdownApi.md#apimarkdownbeautifypost) | **POST** /api/Markdown/beautify |  |
| [**apiMarkdownFileNameDelete**](MarkdownApi.md#apimarkdownfilenamedelete) | **DELETE** /api/Markdown/{fileName} |  |
| [**apiMarkdownFileNameGet**](MarkdownApi.md#apimarkdownfilenameget) | **GET** /api/Markdown/{fileName} |  |
| [**apiMarkdownFileNamePut**](MarkdownApi.md#apimarkdownfilenameput) | **PUT** /api/Markdown/{fileName} |  |
| [**apiMarkdownUploadPost**](MarkdownApi.md#apimarkdownuploadpost) | **POST** /api/Markdown/upload |  |



## apiMarkdownAllFilesGet

> Array&lt;string&gt; apiMarkdownAllFilesGet()



### Example

```ts
import {
  Configuration,
  MarkdownApi,
} from '';
import type { ApiMarkdownAllFilesGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new MarkdownApi();

  try {
    const data = await api.apiMarkdownAllFilesGet();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

**Array<string>**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `text/plain`, `application/json`, `text/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## apiMarkdownBeautifyPost

> string apiMarkdownBeautifyPost(body)



### Example

```ts
import {
  Configuration,
  MarkdownApi,
} from '';
import type { ApiMarkdownBeautifyPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new MarkdownApi();

  const body = {
    // string (optional)
    body: body_example,
  } satisfies ApiMarkdownBeautifyPostRequest;

  try {
    const data = await api.apiMarkdownBeautifyPost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **body** | `string` |  | [Optional] |

### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`, `text/json`, `application/*+json`
- **Accept**: `text/plain`, `application/json`, `text/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## apiMarkdownFileNameDelete

> apiMarkdownFileNameDelete(fileName)



### Example

```ts
import {
  Configuration,
  MarkdownApi,
} from '';
import type { ApiMarkdownFileNameDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new MarkdownApi();

  const body = {
    // string
    fileName: fileName_example,
  } satisfies ApiMarkdownFileNameDeleteRequest;

  try {
    const data = await api.apiMarkdownFileNameDelete(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **fileName** | `string` |  | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## apiMarkdownFileNameGet

> apiMarkdownFileNameGet(fileName)



### Example

```ts
import {
  Configuration,
  MarkdownApi,
} from '';
import type { ApiMarkdownFileNameGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new MarkdownApi();

  const body = {
    // string
    fileName: fileName_example,
  } satisfies ApiMarkdownFileNameGetRequest;

  try {
    const data = await api.apiMarkdownFileNameGet(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **fileName** | `string` |  | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## apiMarkdownFileNamePut

> apiMarkdownFileNamePut(fileName, file)



### Example

```ts
import {
  Configuration,
  MarkdownApi,
} from '';
import type { ApiMarkdownFileNamePutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new MarkdownApi();

  const body = {
    // string
    fileName: fileName_example,
    // Blob (optional)
    file: BINARY_DATA_HERE,
  } satisfies ApiMarkdownFileNamePutRequest;

  try {
    const data = await api.apiMarkdownFileNamePut(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **fileName** | `string` |  | [Defaults to `undefined`] |
| **file** | `Blob` |  | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## apiMarkdownUploadPost

> apiMarkdownUploadPost(file)



### Example

```ts
import {
  Configuration,
  MarkdownApi,
} from '';
import type { ApiMarkdownUploadPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new MarkdownApi();

  const body = {
    // Blob (optional)
    file: BINARY_DATA_HERE,
  } satisfies ApiMarkdownUploadPostRequest;

  try {
    const data = await api.apiMarkdownUploadPost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **file** | `Blob` |  | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

