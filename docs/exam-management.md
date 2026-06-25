# Exam Management

This documentation covers the utility functions used for managing the school, specifically focusing on code frame generation and token highlighting.

## Utility Module: isColorSupported
**Purpose** — Determines if color output is supported in the current environment.

**Behavior** — Checks if the `process` object exists and evaluates the `FORCE_COLOR` environment variable to decide if colors should be supported.

## Utility Module: compose
**Purpose** — Composes two functions into a single function.

**Props / Params** — 
| Name | Type | Required | Description |
|------|------|----------|-------------|
| f | Function | Yes | The first function to apply. |
| g | Function | Yes | The second function to apply. |

**Behavior** — Returns a new function that, when called, invokes `g` with the provided arguments and then passes the result to `f`.

## Utility Module: buildDefs
**Purpose** — Builds a set of color definitions based on the provided color configuration.

**Props / Params** — 
| Name | Type | Required | Description |
|------|------|----------|-------------|
| colors | Object | Yes | An object containing color functions. |

**Behavior** — Returns an object mapping token types to their corresponding color functions.

## Utility Module: getDefs
**Purpose** — Retrieves color definitions based on the enabled state.

**Props / Params** — 
| Name | Type | Required | Description |
|------|------|----------|-------------|
| enabled | Boolean | Yes | A flag indicating whether color definitions should be returned. |

**Behavior** — Returns either the color definitions for enabled or disabled states.

## Utility Module: getTokenType
**Purpose** — Determines the type of a token based on its characteristics.

**Props / Params** — 
| Name | Type | Required | Description |
|------|------|----------|-------------|
| token | Object | Yes | The token to analyze. |
| offset | Number | Yes | The position of the token in the source text. |
| text | String | Yes | The source text being analyzed. |

**Behavior** — Analyzes the token and returns a string representing its type, such as "keyword", "jsxIdentifier", or "capitalized".

## Utility Module: highlight
**Purpose** — Highlights the syntax of the provided text.

**Props / Params** — 
| Name | Type | Required | Description |
|------|------|----------|-------------|
| text | String | Yes | The text to highlight. |

**Behavior** — Processes the text, applying color definitions to recognized token types and returning the highlighted string.

## Utility Module: getMarkerLines
**Purpose** — Calculates the lines to be marked in a code frame.

**Props / Params** — 
| Name | Type | Required | Description |
|------|------|----------|-------------|
| loc | Object | Yes | The location object containing start and end positions. |
| source | Array | Yes | The source code lines. |
| opts | Object | Yes | Options for line marking. |
| startLineBaseZero | Boolean | Yes | Indicates if line numbers are zero-based. |

**Behavior** — Computes the start and end lines for the marker and returns an object containing the marker lines.

## Utility Module: codeFrameColumns
**Purpose** — Generates a code frame with highlighted lines based on the provided location.

**Props / Params** — 
| Name | Type | Required | Description |
|------|------|----------|-------------|
| rawLines | String | Yes | The raw source code lines. |
| loc | Object | Yes | The location object for highlighting. |
| opts | Object | No | Options for code frame generation. |

**Behavior** — Creates a formatted string representing the code frame, highlighting the specified lines and adding markers where necessary.

## Utility Module: index
**Purpose** — Deprecated function for generating a code frame based on line and column numbers.

**Props / Params** — 
| Name | Type | Required | Description |
|------|------|----------|-------------|
| rawLines | String | Yes | The raw source code lines. |
| lineNumber | Number | Yes | The line number to highlight. |
| colNumber | Number | Yes | The column number to highlight. |
| opts | Object | No | Options for code frame generation. |

**Behavior** — Issues a deprecation warning and calls `codeFrameColumns` to generate the code frame.

**Dependencies** — 
- `picocolors` from 'picocolors'
- `jsTokens` from 'js-tokens'
- `helperValidatorIdentifier` from '@babel/helper-validator-identifier'