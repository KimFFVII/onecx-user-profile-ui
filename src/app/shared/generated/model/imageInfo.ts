/**
 * onecx-user-profile-bff
 * OneCx user profile Bff
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface ImageInfo { 
    modificationCount?: number;
    creationDate?: string;
    creationUser?: string;
    modificationDate?: string;
    modificationUser?: string;
    id?: string;
    /**
     * flag whether Image was uploaded by user
     */
    userUploaded?: boolean;
    imageUrl?: string;
    smallImageUrl?: string;
}
