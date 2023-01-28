import React from 'react';
import { renderRichText as typeSafeRender } from 'gatsby-source-contentful/rich-text';
import { Options } from '@contentful/rich-text-react-renderer';
import { ReactNode } from 'react';
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types';
import { GatsbyImage } from 'gatsby-plugin-image';

const defaultOptions: Options = {
	renderNode: {
		[BLOCKS.EMBEDDED_ASSET]: (node) => {
			const { target } = node.data;
			return <GatsbyImage image={target.gatsbyImageData} alt={target.title} />;
		}
	}
};

// everything pulled from autogenerated query types is nullable
// this saves us having to do "as unknown" everywhere
export function renderRichText(data: any, options = defaultOptions): ReactNode {
	return typeSafeRender(data, options);
}