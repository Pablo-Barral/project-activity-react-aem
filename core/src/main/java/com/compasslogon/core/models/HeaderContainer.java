/*
 * ***********************************************************************
 * Compass Logon CONFIDENTIAL
 * ___________________
 *
 * Copyright 2022 Compass Logon.
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains the property
 * of Compass Logon and its suppliers, if any. The intellectual and
 * technical concepts contained herein are proprietary to Compass Logon
 * and its suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Compass Logon.
 * ***********************************************************************
 */

package com.compasslogon.core.models;

import org.osgi.annotation.versioning.ConsumerType;


/**
 * Defines the {@code HeaderContainer} Sling Model used for the {@code compasslogon/components/content/header-container} component.
 * 
 */
@ConsumerType
public interface HeaderContainer {


    String getColor();

}
