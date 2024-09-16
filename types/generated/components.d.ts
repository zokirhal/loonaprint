import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsPortfolio extends Schema.Component {
  collectionName: 'components_components_portfolios';
  info: {
    displayName: 'portfolio';
  };
  attributes: {
    port_list: Attribute.String;
    port_img: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
  };
}

export interface ComponentsFaq extends Schema.Component {
  collectionName: 'components_components_faqs';
  info: {
    displayName: 'faq';
  };
  attributes: {
    faq_question: Attribute.String;
    faq_answer: Attribute.Text;
  };
}

export interface ComponentsCallToAction extends Schema.Component {
  collectionName: 'components_components_call_to_actions';
  info: {
    displayName: 'call_to_action';
  };
  attributes: {
    cta_title: Attribute.String;
    cta_desc: Attribute.String;
    cta_img: Attribute.Media<'images'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.portfolio': ComponentsPortfolio;
      'components.faq': ComponentsFaq;
      'components.call-to-action': ComponentsCallToAction;
    }
  }
}
