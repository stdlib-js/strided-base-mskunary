/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

#include "stdlib/strided/base/mskunary/f_i.h"
#include "stdlib/strided/base/mskunary/macros.h"
#include <stdint.h>

/**
* Applies a unary callback accepting a single-precision floating-point number and returning a signed 32-bit integer to a single-precision floating-point strided input array and assigns results to elements in a signed 32-bit integer strided output array.
*
* @param arrays   array whose first element is a pointer to a strided input array, whose second element is a pointer to a strided mask array, and whose last element is a pointer to a strided output array
* @param shape    array whose only element is the number of elements over which to iterate
* @param strides  array containing strides (in bytes) for each strided array
* @param fcn      callback
*
* @example
* #include "stdlib/strided/base/mskunary/f_i.h"
* #include <stdint.h>
* #include <math.h>
*
* // Create underlying byte arrays:
* uint8_t x[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
* uint8_t m[] = { 0, 1, 0 };
* uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define a pointer to an array containing pointers to strided arrays:
* uint8_t *arrays[] = { x, m, out };
*
* // Define the strides:
* int64_t strides[] = { 4, 1, 4 }; // 4 bytes per float, 1 byte per uint8, 4 bytes per int32
*
* // Define the number of elements over which to iterate:
* int64_t shape[] = { 3 };
*
* // Apply the callback:
* stdlib_strided_mask_f_i( arrays, shape, strides, (void *)lrintf );
*/
void stdlib_strided_mask_f_i( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn ) {
	typedef int32_t func_type( const float x );
	func_type *f = (func_type *)fcn;
	STDLIB_STRIDED_MSKUNARY_LOOP_CLBK( float, int32_t )
}
