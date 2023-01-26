/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Pet } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PetCardOverridesProps = {
    PetCard?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    Name?: PrimitiveOverrideProps<FlexProps>;
    "Melinda Marcus"?: PrimitiveOverrideProps<TextProps>;
    Breed?: PrimitiveOverrideProps<TextProps>;
    About?: PrimitiveOverrideProps<TextProps>;
    "Age:"?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
    DeleteButton?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type PetCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    pet?: Pet;
} & {
    overrides?: PetCardOverridesProps | undefined | null;
}>;
export default function PetCard(props: PetCardProps): React.ReactElement;
