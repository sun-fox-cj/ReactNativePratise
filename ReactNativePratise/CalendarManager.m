//
//  CalendarManager.m
//  ReactNativePratise
//
//  Created by jie Chi on 16/2/3.
//  Copyright © 2016年 com.gozap. All rights reserved.
//

#import "CalendarManager.h"
#import <React/React-umbrella.h>
#import <React/RCTEventDispatcher.h>

@interface CalendarManager ()

@end

@implementation CalendarManager

RCT_EXPORT_MODULE();

@synthesize bridge = _bridge;

- (void)launchEvent {
    
    [self.bridge.eventDispatcher sendAppEventWithName:@"EventReminder" body:@{@"name":@"123456"}];
    
    [self.bridge.eventDispatcher sendDeviceEventWithName:@"EventReminder" body:@{@"name":@"123456"}];
}

@end
