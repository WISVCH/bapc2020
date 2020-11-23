import { RootState } from '@store';
import { Action, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
export const UPDATE_PAGE = 'UPDATE_PAGE';
export const UPDATE_OFFLINE = 'UPDATE_OFFLINE';
export const UPDATE_DRAWER_STATE = 'UPDATE_DRAWER_STATE';
export const OPEN_SNACKBAR = 'OPEN_SNACKBAR';
export const CLOSE_SNACKBAR = 'CLOSE_SNACKBAR';

export interface AppActionUpdatePage extends Action<'UPDATE_PAGE'> {
  page: string;
}
export interface AppActionUpdateOffline extends Action<'UPDATE_OFFLINE'> {
  offline: boolean;
}
export interface AppActionUpdateDrawerState extends Action<'UPDATE_DRAWER_STATE'> {
  opened: boolean;
}
export interface AppActionOpenSnackbar extends Action<'OPEN_SNACKBAR'> {}
export interface AppActionCloseSnackbar extends Action<'CLOSE_SNACKBAR'> {}
export type AppAction =
  AppActionUpdatePage |
  AppActionUpdateOffline |
  AppActionUpdateDrawerState |
  AppActionOpenSnackbar |
  AppActionCloseSnackbar;

type ThunkResult = ThunkAction<void, RootState, undefined, AppAction>;

export const navigate: ActionCreator<ThunkResult> = (path: string) => (dispatch) => {
  // Extract the page name from path.
  const page = path === '/' ? 'home' : path.slice(1);

  // Any other info you might want to extract from the path (like page type),
  // you can do here
  dispatch(loadPage(page));

  // Close the drawer - in case the *path* change came from a link in the drawer.
  dispatch(updateDrawerState(false));
};

const loadPage: ActionCreator<ThunkResult> = (page: string) => (dispatch) => {
  switch (page) {
    case 'home':
      import('../components/bapc-view/bapc-view.component').then(() => {
        // Put code in here that you want to run every time when
        // navigating to view1 after my-view1.js is loaded.
      });
      break;
    case 'contest':
      import('../components/contact-view/contact-view.component').then()
      break;
    case 'preliminaries':
      import('../components/preliminaries-view/preliminaries-view.component').then();
      break;
    case 'schedule':
      import('../components/schedule-view/schedule-view.component').then();
      break;
    case 'system':
      import('../components/system-view/system-view.component').then();
      break;
    case 'registration':
      import('../components/registration-view/registration-view.component').then();
      break;
    case 'rules':
      import('../components/rules-view/rules-view.component').then();
      break;
    case 'location':
      import('../components/location-view/location-view.component').then();
      break;
    case 'organisation':
      import('../components/organisation-view/organisation-view.component').then();
      break;
    case 'contact':
      import('../components/contact-view/contact-view.component').then();
      break;
    case 'scoreboard-preliminaries':
      import('../components/scoreboard-prelim/scoreboard-prelim').then();
      break;
    default:
      page = 'view404';
      import('../components/my-view404/my-view404.component');
  }

  dispatch(updatePage(page));
};

const updatePage: ActionCreator<AppActionUpdatePage> = (page: string) => {
  return {
    page,
    type: UPDATE_PAGE,
  };
};

let snackbarTimer: number;

export const showSnackbar: ActionCreator<ThunkResult> = () => (dispatch) => {
  dispatch({
    type: OPEN_SNACKBAR,
  });
  window.clearTimeout(snackbarTimer);
  snackbarTimer = window.setTimeout(() =>
    dispatch({ type: CLOSE_SNACKBAR }), 3000);
};

export const updateOffline: ActionCreator<ThunkResult> =
  (offline: boolean) => (dispatch, getState) => {
  // Show the snackbar only if offline status changes.
  if (offline !== getState().app!.offline) {
    dispatch(showSnackbar());
  }
  dispatch({
    offline,
    type: UPDATE_OFFLINE,
  });
};

export const updateDrawerState: ActionCreator<AppActionUpdateDrawerState> = (opened: boolean) => {
  return {
    opened,
    type: UPDATE_DRAWER_STATE,
  };
};
