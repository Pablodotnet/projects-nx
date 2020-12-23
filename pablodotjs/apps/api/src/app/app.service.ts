import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AppList } from './mocks/AppList';
import { AppItem } from '@pablodotjs/shared';

@Injectable()
export class AppService {
  private appList: AppItem[] = AppList;

  getAllApps(): AppItem[] {
    return this.appList;
  }

  createApp({ title, description }): AppItem[] | HttpException {
    if (!!title && !!description) {
      this.appList.push({ title, description });
      return this.appList;
    } else {
      const missingFields = [];
      if (!title || title === '') {
        missingFields.push('title')
      }
      if (!description || description === '') {
        missingFields.push('description');
      }
      const error = {
        message: `Create app failed`,
        errors: { missingFields }
      };
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
}
