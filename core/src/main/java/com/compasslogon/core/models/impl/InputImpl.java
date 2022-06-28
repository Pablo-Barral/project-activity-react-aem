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

package com.compasslogon.core.models.impl;

import com.compasslogon.core.models.Input;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(adaptables = {
    SlingHttpServletRequest.class
}, adapters = Input.class, resourceType = "compasslogon/components/content/input")
public class InputImpl
    implements Input
{

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String type;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String placeholder;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String value;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String color;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String bgColor;

    @Override
    public String getType() {
        return type;
    }

    @Override
    public String getPlaceholder() {
        return placeholder;
    }

    @Override
    public String getValue() {
        return value;
    }

    @Override
    public String getColor() {
        return color;
    }

    @Override
    public String getBgColor() {
        return bgColor;
    }

}
