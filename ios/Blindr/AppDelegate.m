//
//  AppDelegate.m
//  Blindr
//
//  Created by James Billingham on 17/12/2015.
//  Copyright © 2015 Cuvva. All rights reserved.
//

#import "AppDelegate.h"
#import <React/RCTRootView.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
#if DEBUG
	NSURL *jsCodeLocation = [NSURL URLWithString:@"http://192.168.30.221:8081/index.ios.bundle?platform=ios&dev=true"];
#else
	NSURL *jsCodeLocation = [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif

	RCTRootView *rootView =
	[[RCTRootView alloc]
	 initWithBundleURL:jsCodeLocation
	 moduleName:@"Blindr"
	 initialProperties:nil
	 launchOptions:launchOptions];

	UIViewController *rootVC = [UIViewController new];
	rootVC.view = rootView;

	self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
	self.window.rootViewController = rootVC;
	[self.window makeKeyAndVisible];

	return YES;
}

@end
