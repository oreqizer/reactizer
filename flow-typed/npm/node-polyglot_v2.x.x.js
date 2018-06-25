// flow-typed signature: 3c4fb34a43990e5147787ecee58f3962
// flow-typed version: 674bca2997/node-polyglot_v2.x.x/flow_>=v0.25.0

declare module "node-polyglot" {
  declare type onMissingKeyType = (
    key: string,
    opts: Object,
    locale: string
  ) => string;

  declare class Polyglot {
    constructor(options?: {
      phrases?: Object,
      locale?: string,
      allowMissing?: boolean,
      onMissingKey?: onMissingKeyType
    }): Polyglot,
    extend(phrases: Object): void,
    t(id: string, props?: Object): string,
    locale(id?: string): string,
    unset(idOrPhrases: string | Object): void,
    clear(): void,
    replace(phrases: Object): void,
    has(key: string): boolean,

    static transformPhrase(
      phrase: string,
      substitutions?: Object,
      locale?: string
    ): string
  }

  declare module.exports: Class<Polyglot>;
}
