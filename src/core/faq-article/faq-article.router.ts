import { setActivePath } from 'src/lib/common/navigation';
import {
  FAQ_SIZE_ROUTE_PATH,
  FAQ_DELIVERY_PAYMENT_ROUTE_PATH,
  FAQ_LEGAL_INFORMATION_ROUTE_PATH,
  FAQ_PRIVACY_POLICY_ROUTE_PATH,
  FAQ_TERMS_OF_USE_ROUTE_PATH,
  FAQ_ABOUT_US_ROUTE_PATH,
  FAQ_ROUTE_PATH,
} from './faq-article.constant';

export function faqSizeRouter(ctx: any) {
  ctx.store.dispatch(setActivePath(FAQ_SIZE_ROUTE_PATH));
}
export function faqDeliveryPaymentRouter(ctx: any) {
  ctx.store.dispatch(setActivePath(FAQ_DELIVERY_PAYMENT_ROUTE_PATH));
}
export function faqLegalInformationRouter(ctx: any) {
  ctx.store.dispatch(setActivePath(FAQ_LEGAL_INFORMATION_ROUTE_PATH));
}
export function faqPrivacyPolicyRouter(ctx: any) {
  ctx.store.dispatch(setActivePath(FAQ_PRIVACY_POLICY_ROUTE_PATH));
}
export function faqTermsOfUseRouter(ctx: any) {
  ctx.store.dispatch(setActivePath(FAQ_TERMS_OF_USE_ROUTE_PATH));
}
export function faqAboutUsRouter(ctx: any) {
  ctx.store.dispatch(setActivePath(FAQ_ABOUT_US_ROUTE_PATH));
}
export function faqRouter(ctx: any) {
  ctx.store.dispatch(setActivePath(FAQ_ROUTE_PATH));
}
